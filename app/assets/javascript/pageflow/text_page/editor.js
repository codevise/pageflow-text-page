//= require_self
//= require ./editor/content_image_embedded_view

pageflow.textPage = pageflow.textPage || {};

pageflow.ConfigurationEditorView.register('text_page', {
  configure: function () {
    this.tab('header', function () {
      this.input('text_coverage', pageflow.SelectInputView, {values: pageflow.textPage.textCoverageOptions});
      this.input('title', pageflow.TextInputView, {required: true});
      this.input('hide_title', pageflow.CheckBoxInputView);
      this.input('tagline', pageflow.TextInputView);
      this.input('subtitle', pageflow.TextInputView);
      this.input('text_position', pageflow.SelectInputView, {values: pageflow.textPage.titlePositions});

      this.group('background');

      this.input('gradient_opacity', pageflow.SliderInputView);
      this.input('invert', pageflow.CheckBoxInputView);
    });

    this.tab('content', function () {
      this.input('text_title', pageflow.TextInputView);
      this.input('text', pageflow.TextAreaInputView, {
        fragmentLinkInputView: pageflow.PageLinkInputView
      });
      this.input('invert_text', pageflow.CheckBoxInputView);
      this.input('text_page_background_color', pageflow.ColorInputView, {
        defaultValue: function(invertText) {
          return invertText ? '#000000' : '#ffffff';
        },
        defaultValueBinding: 'invert_text',

        swatches: usedBackgroundColors()
      });

      this.input('text_image_id', pageflow.FileInputView, {
        collection: pageflow.imageFiles,
        positioning: false,
        fileSelectionHandlerOptions: {
          returnToTab: 'content'
        },
      });
      this.input('image_description', pageflow.TextInputView);
      this.input('sticky_inline_image', pageflow.CheckBoxInputView);
      this.input('prevent_fullscreen', pageflow.CheckBoxInputView);
      this.input('inline_text_position', pageflow.SelectInputView, {values: pageflow.textPage.inlineTextPositions});
    });

    this.tab('options', function () {
      this.input('topasset_parallax', pageflow.CheckBoxInputView);
      this.input('topasset_dim', pageflow.CheckBoxInputView);
      this.input('thumbnail_image_id', pageflow.FileInputView, {
        collection: pageflow.imageFiles,
        imagePositioning: false,
        fileSelectionHandlerOptions: {
          returnToTab: 'options'
        }
      });
      this.group('options');
    });

    function usedBackgroundColors() {
      return _.chain(pageflow.pages.map(function(page) {
        return page.configuration.get('text_page_background_color');
      })).uniq().compact().value();
    }
  }
});
