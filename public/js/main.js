/**
 * Created by WEREM on 5/29/16.
 */
'use strinct'

$(document).ready(function () {
	console.log('Application initialized');

	$('#actAddTask').click(actAddTask);
	$('#actUpdateList').click(actUpdateTaskList);

});

var actAddTask = function () {
	$('#taskContainer').append('<div class="alert alert-success" role="alert">This is a task</div>');
};

var actUpdateTaskList = function () {
	$.ajax({
		'url': 'api/tasks',
		dataType: 'json',
		success: function (json) {
			$.each(json, function (key, value) {
				$('#taskContainer').append(
					'<div class="alert alert-warning alert-dismissible" role="alert">' +
					'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
					+ value.title +
					'</div>');
			});
		}
	});
};
