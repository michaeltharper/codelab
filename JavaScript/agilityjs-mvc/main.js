//
// Hello World ...initializes an MVC object with empty model, a simple view, and default controllers:
// 
var message = $$({
  model: {},
  view: {
    format: '<p><div class="dwrap">Hello World</div></p>'
  },
  controller: {}
});
$$.document.append(message);

// 
// Hello World - Compact version
// Compact syntax: initializers are passed in the order M, V, C:
var message = $$({}, '<div class="dwrap">Hi World</div>');
$$.document.append(message);


//
// start MVC 'TO-DO LIST'
// Item prototype
//
var item = $$({}, '<li><span data-bind="content"/> <button>x</button></li>', '& span { cursor:pointer; }', {
  'click span': function(){
    var input = prompt('Edit to-do item:', this.model.get('content'));
    if (!input) return;
    this.model.set({content:input});
  },
  'click button': function(){
    this.destroy();
  }
});
//
// List of items
//
var list = $$({}, '<p><div class="dwrap"> <button id="new">New TODO item</button> <ul></ul> </div></p>', {
  'click #new': function(){
    var newItem = $$(item, {content:'Click to edit'});
    this.append(newItem, 'ul'); // add to container, appending at <ul>
  }
});
$$.document.append(list);
// END MVC 'TO-DO LIST'


// Two-way binding (checkbox)
var check = $$(
  {a:false, b:true},
  "<p><div class='dwrap'> \
      <input type='checkbox' name='test' data-bind='a'/> checked: <span data-bind='a'/><br/> \
      <input type='checkbox' name='test' data-bind='b'/> checked: <span data-bind='b'/><br/> \
   </div></p>"
);
$$.document.append(check);


// Bind model to element's HTML content
var message = $$({txt:"I'm text from a model"}, '<div class="dwrap" data-bind="txt"/>');
$$.document.append(message);

// Bind model to element's attribute
var url = 'http://google.com/favicon.ico';
var icon = $$({path:url}, '<p class="dwrap">Image src from model: <img data-bind="src=path"/></p>');
$$.document.append(icon);



/* Controller-event bindings
User-defined controllers are bound to events by automatically matching function and event names.
To handle DOM events, start with the event name followed by a DOM selector. 
Agility events (e.g. object creation, model change, etc) are never followed by a selector:  */
var person = $$({}, '<p class="dwrap">Controller-event bindings:<br /><span id="msg"/><br><input type="text" data-bind="name"/> </p>', {
  'create': function(){
    // Fired upon object creation
    this.view.$('#msg').text('Enter name:');
  },
  'change': function(){
    // Fired upon model change
    this.view.$('#msg').text('Name changed to: '+this.model.get('name'));
  },
  'focus input': function(){
    // Fired upon DOM event 'focus' on element input
    // 'this' is always auto-proxied to the owner MVC object
    this.view.$('#msg').text('Focus is on input');
  }
});
$$.document.append(person);



/*
Inheritance and containers
Agility adopts a simple object hierarchy model. Objects can serve as the prototype of other objects (differential inheritance):  */
document.write("<br><br><b>Inheritance and containers</b>");
// Base object with empty model:
var proto = $$({}, '<p data-bind="name" class="dwrap" style="color:red"><b>Inheritance and containers</b></p>');
// Derived objects with specified models:
var obj1 = $$(proto, {name:'Joe Doe'});
var obj2 = $$(proto, {name:'Foo Bar'});
$$.document.append(obj1);
$$.document.append(obj2);

