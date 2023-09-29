require 'pageflow/text_page/engine'
require 'pageflow/text_page/version'

module Pageflow
  module TextPage
    def self.page_type
      TextPage::PageType.new
    end
  end
end
