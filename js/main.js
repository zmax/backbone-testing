// App Start
(function(){

///////////////////////////////////////////////////////////////////////////
//
// Define Classes ...
//
///////////////////////////////////////////////////////////////////////////

window.App = {
	Models: {},
	Views: {},
	Collections: {},
	Helpers: {}
};

App.Helpers.templte = function( id ) {
	return _.template( $('#'+ id).html() );
}

App.Models.Person = Backbone.Model.extend( {

	defaults: {
		name: 'Somebody',
		age: 0,
		occupation: 'free',
		edit: false
	},

	validate: function(attrs) {
		if( attrs.name === undefined || !$.trim(attrs.name) ) {
			return 'Every peron must have a name.';
		}
	},

	initialize: function() {
		this.on('invalid', function(model, error){
			console.log(error);
		});
	}

});

App.Collections.Person = Backbone.Collection.extend({
	model: App.Models.Person,
});

App.Views.Person = Backbone.View.extend({

	tagName: 'li',

	id: 'person-',

	//template: _.template('<%= name %> (<%= age %>)'),
	template: 'personTemplate',
	edit_template: 'edit-personTemplate',

	events: {

		// edit when double click
		'dblclick': 'doEditable',
		// change when unfocus on view
		'blur': 'noEditable',
		// change when clicking the update button
		'click .update': 'noEditable',
		// remove model
		'click .delete': 'onRemove'

	},


	initialize: function() {
		//console.log( this );
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.onModelDestory, this)
		this.$el.attr('id', this.id + this.model.cid );
		this.render();
	},

	render: function() {
		//this.$el.html( this.template( this.model.toJSON() ) );
		//var template = App.Helpers.templte(this.template);
		if ( this.model.get('edit') ) {
			this.$el.html( App.Helpers.templte(this.edit_template)( this.model.toJSON() ) );
		}else{
			this.$el.html( App.Helpers.templte(this.template)( this.model.toJSON() ) );
		}
		// console.log('Person View render.');
		return this;
	},

	showAlert: function() {
		alert( this.model.get('name') );
	},

	doEditable: function() {
		//this.$el.attr('contenteditable', true);
		this.model.set('edit',true);
	},

	noEditable: function() {
		//console.log(this.$el);

		// console.log( this.$el.find('.name').val() );
		// this.model.set('name', this.$el.find('.name').val() );
		// this.model.set('age', this.$el.find('.age').val() );
		// this.model.set('edit',false);

		var msg = this.model.set({

			name: $.trim( this.$el.find('.name').val() ),
			age: $.trim( this.$el.find('.age').val() ),
			edit: false

		});

		console.log( msg );

		//this.$el.attr('contenteditable', false);
	},

	onModelDestory: function() {
		this.remove();
	},

	onRemove: function() {
		// model destroy
		this.model.destroy();
	}

});

App.Views.People = Backbone.View.extend({

	tagName: 'ul',

	target: '#peopleView',

	initialize: function() {
		// 
		this.collection.on('add', this.addOne, this);
		this.render();
	},

	render: function() {

		// console.log( this.collection );

		this.$el.html('');

		// each function 帶入第二個參數將改變 this 的指向
		// 預設 this 為 global window object
		this.collection.each( this.addOne, this);

		//$(this.target).html()
		//$(this.target).html( this.el );

		return this;

	},

	addOne: function( person ) {
		// console.log( person instanceof Backbone.Model  );
		this.$el.append( new App.Views.Person({ model: person }).el );
	}

});

App.Views.AddPerson = Backbone.View.extend({

	el: '#tool-panel',

	events: {
		'click #addPeople': 'addPerson'
	},

	addPerson: function() {
		this.collection.add( new App.Models.Person({ 
			name: $.trim( this.$el.find('#name').val() ),
			age: $.trim( this.$el.find('#age').val() )
		}) );

		this.$el.find('#name').val('');
		this.$el.find('#age').val('');
		// console.log( this.collection );
	}

});

var customEvent = _.extend({}, Backbone.Events);

App.Views.CustomEvent = Backbone.View.extend({
	el: '#customEvent',
	isRunning: true,
	// actionStart: 'Start Binding',
	// actionStop: 'Stop Binding',

	events: {
		'click .action': 'doAction'
	},

	initialize: function() {
		// console.log( customEvent );
		customEvent.bind("start", this.startBinding, this);
		customEvent.bind("stop", this.stopBinding, this);
		this.render();
	},
	render: function() {
		//var template = _.template( this.$el.html() );
		this.checkStatus();
		return this;
	},
	doAction: function() {
		this.isRunning = !this.isRunning;
		this.render();
	},
	checkStatus: function() {
		// console.log( this.isRunning );
		if ( this.isRunning ) {
			// if customEvent binding is running
			customEvent.trigger("start");
		}else{
			customEvent.trigger("stop");
		}
	},
	startBinding: function() {
		// console.log('start binding...');
		this.$el.find('button.action').html('Stop Binding');
		this.$el.find('span.status').html('is binding... now');
		// this.isRunning = true;
	},
	stopBinding: function() {
		// console.log('stop binding...');
		this.$el.find('button.action').html('Start Binding');
		this.$el.find('span.status').html('not bind yet.');
		// this.isRunning = false;
	}
});

new App.Views.CustomEvent;


///////////////////////////////////////////////////////////////////////////
// 
///////////////////////////////////////////////////////////////////////////



})();
// App End

var person = new App.Models.Person( {
	name: 'Starck Lin',
	age: 30
} );

var person2 = new App.Models.Person({
	name: 'Jessie Wang',
	age: 30
});

var personView = new App.Views.Person({ model: person });
//var personView2 = new App.Views.Person({ model: new App.Models.Person({ name: 'Jessie Wang', age: 30 }) });

var personCol = new App.Collections.Person([
	person,
	person2,
	{
		name: 'Test',
		age: 27
	},
	{
		name: 'Test2',
		age: 33
	}
]);

var viewCol = new Backbone.Collection();

var peopleView = new App.Views.People({ collection: personCol });

$('#peopleList').append( peopleView.el );

var addPersonView = new App.Views.AddPerson({ collection: personCol });
// $('#tool-panel').append( new App.Views.AddPerson({ collection: personCol }).el )

// $(document.body).append( personView.el );
// $(document.body).append( personView2.el );

// personCol.each( function( modelData ) {
// 	// console.log(modelData);
// 	//var view = new PersonView( { model: modelData } );
// 	var modelView = new App.Views.Person({ model: modelData });
// 	//viewCol.add( new PersonView({ model: modelData }) );
// 	viewCol.add({ model: modelData, view: modelView});

// 	//$(document.body).append( view.el );

// });

// // console.log( viewCol );

// viewCol.each( function(data){
// 	$(document.body).append( data.get('view').el );
// });


//

var oriHeight = $('#ani-target').css('height');

$('button#slide').click(function(){

	// if($('#ani-target').is(':hidden')) {
	// 	$('#ani-target').slideDown(1000);
	// }else{
	// 	$('#ani-target').slideUp(600);
	// }
	// console.log( $('#ani-target').animate );
	console.log(oriHeight);
	var target = $('#ani-target');
	// target.css('position','relative');
	// target.css('overflow','hidden');

	// if ( parseInt(target.css('height'),10) >= parseInt(oriHeight,10) ) {
	// 	target.animate({height:'0px'}, 500);
	// }else{
	// 	target.animate( { height: oriHeight }, 500);
	// }

	// TweenLite()
	if ( target.hasClass('close') ) {
		TweenLite.to( target, .2, {
			className:"-=close",
			top: 0,
			height: '16px'
		});
		// TweenLite.to( target, .2, {className:"-=mtop10"} );
	}else{
		// TweenLite.to( target, .2, {className:"+=close"} );
		// TweenLite.to( target, .2, {className:"+=mtop10"} );
		TweenLite.to( target, .2, {
			className:"+=close",
			top: '-10px',
			height: '0px'
		});
	}

	// if ( target.hasClass('mtop10') ) {
		
	// }else{
		
	// }
	


});







