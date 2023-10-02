require 'pageflow-public-i18n'

module Pageflow
  module TextPage
    class Engine < Rails::Engine
      isolate_namespace Pageflow::TextPage

      if Rails.respond_to?(:autoloaders)
        lib = root.join('lib')

        config.autoload_paths << lib
        config.eager_load_paths << lib

        initializer 'pageflow_text_page.autoloading' do
          Rails.autoloaders.main.ignore(
            lib.join('pageflow-text-page.rb'),
            lib.join('pageflow/text_page/version.rb')
          )
        end
      else
        config.autoload_paths << File.join(config.root, 'lib')
      end

      config.i18n.load_path += Dir[config.root.join('config', 'locales', '**', '*.yml').to_s]
    end
  end
end
