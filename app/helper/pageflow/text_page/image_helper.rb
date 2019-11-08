module Pageflow
  module TextPage
    module ImageHelper
      def content_image(perma_id, alt, format = :medium)
        image = find_file_in_entry(ImageFile, perma_id)
        if image
          image_tag(image.attachment.url(format), alt: alt)
        else
          ''
        end
      end

      def content_image_large(perma_id, alt, format = :large)
        image = find_file_in_entry(ImageFile, perma_id)
        if image
          image_tag(image.attachment.url(format), alt: alt)
        else
          ''
        end
      end

      def fullscreen_image_url(perma_id, format = :large)
        image = find_file_in_entry(ImageFile, perma_id)
        if image
          return image.attachment.url(format)
        else
          '#'
        end
      end

      def background_asset_present_css_class(configuration)
        file =
          if configuration['background_type'] == 'video'
            find_file_in_entry(VideoFile, configuration['video_file_id'])
          else
            find_file_in_entry(ImageFile, configuration['background_image_id'])
          end

        file ? '' : 'no_background_asset'
      end
    end
  end
end
