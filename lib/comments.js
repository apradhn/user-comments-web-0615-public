'use-strict';

$(document).ready(function(){
  // functions are called inside the document ready
  hideErrors();
  hideForm();
  addCommentListener();
  cancelListener();
  submitCommentListener();
});

// write your functions out here
function hideErrors() {
  var nameError = $("#com-name-error"), emailError = $("#com-email-error"), commentError = $("#comment-error");
  nameError.css("display", "none"), emailError.css("display", "none"), commentError.css("display", "none");
}

function hideForm() {
  $("form#add-comment").css("display", "none");
}

function addCommentListener() {
  var addComment =  $('#show-comment-form'), commentForm = $("form#add-comment");
  addComment.click(function() {
    commentForm.css("display", "block");
  });
}

function cancelListener() {
  var cancel = $("#cancel");
  cancel.click(function() {
    hideForm();
  });
}

function submitCommentListener() {
  var submit = $("input[type='submit']"), form = $("form#add-comment"), name = $("#comment-name"), email = $("#com-email"), comment = $("#comment");
  var posts = $("#posts");

  var newComment = "<div class=\"newcomment\"><span class=\"name\">";
  newComment += name.val();
  newComment += "</span><span class=\"email\">";
  newComment += email.val()
  newComment += "</span><span class=\"date\"></span><p class=\"comment\">";
  newComment += comment.val();
  newComment += "</p></div>";

  submit.click(function(event) {
    nameValidator(name.val());
    emailValidator(email.val());
    commentValidator(comment.val());
    posts.append(newComment);
  });
}

function nameValidator(name) {
  var nameError = $("#com-name-error");
  if (name.length < 3) {
      nameError.css("display", "inline"); 
      event.preventDefault();
  }
}

function emailValidator(email) {
  var regex = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+.([a-z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)$/;
  var emailError = $("#com-email-error");
  if (regex.test(email) === false) {
    emailError.css("display", "inline");
    event.preventDefault();
  }
}

function commentValidator(comment) {
  var commentError = $("#comment-error");
  if (comment === "") {
    commentError.css("display", "inline");
    event.preventDefault();
  }
}

