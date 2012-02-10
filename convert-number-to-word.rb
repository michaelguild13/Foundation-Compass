require 'sass'

## install Linguistics gem: sudo gem install linguistics

require 'linguistics'
Linguistics::use( :en ) # extends Array, String, and Numeric

## this is the linguistics gem, 
## instructions on how to use, http://deveiate.org/projects/Linguistics/wiki/English
## 5.en.numwords would output 'five'

## Sass Function

module Sass::Script::Functions
  def convert_number_to_word(number)
    assert_type number, :Number
    Sass::Script::String.new(number.value.en.numwords)
  end
  declare :convert_number_to_word, :args => [:Number]
end


## To use in Compass, save this file in the same directory as the config.rb
## and add as a required library in your config.rb file.
##
## require 'convert-number-to-word'
##