;$(function(app) {

  app.components = app.components || {};

  // Profile component
  app.components.profile = (function() {

    // private properties and methods
    var _private = {

      skills: {
        $block: $('#skills'),
        levels: [
          { color: 'black', text: 'Strong' },
          { color: 'gray', text: 'Middle' },
          { color: 'lightgray', text: 'Weak' }
        ],
        levelSelectID: 'level-select',
        btnID: 'skills-btn'
      },

      render: function() {

        // add select with levels
        _private.skills.$input.after(function() {
          var $levelSelect = $('<select/>', { id: _private.skills.levelSelectID });
          $.each(_private.skills.levels, function(i, level) {
            $levelSelect.append($('<option/>', {
              value: level.color,
              text: level.text
            }));
          });
          return $levelSelect;
        });

        $('#' + _private.skills.levelSelectID).after(
          $('<button/>', { id: _private.skills.btnID,})
            .html('<i class="glyphicon glyphicon-ok"></i>')
        );

      },

      bind: function() {

        // keep skills input active
        $('#' + _private.skills.levelSelectID)
          .on('click', function(event) {
            event.stopPropagation();
            _private.skills.$input.addClass('focused');
          })
          .on('blur', function(event) {
            _private.skills.$input.removeClass('focused');
          });

        $('#' + _private.skills.btnID).on('click', function(event) {
          event.stopPropagation();
        });

      }

    };

    // public properties and methods
    return {

      // initialize component
      init: function() {

        $('#username, #country, #language').editable();

        _private.skills.$block.tagsInput({
          'defaultText': 'Add skills',
          'placeholderColor': '#000000'
        });

        _private.skills.$input = _private.skills.$block.next('.tagsinput').find('input');

        _private.render();
        _private.bind();

      }

    }

  })();

}( window.app = window.app || {} ));
