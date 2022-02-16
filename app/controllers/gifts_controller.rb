class GiftsController < ApplicationController
    set :default_content_type, 'application/json'

    get "/gifts" do 
        # fetch("http://localhost9292/gifts")
        gifts = Gift.all
        gifts.to_json
    end

    post "/gifts" do
        new_gift = Gift.create(params)
        # if this does not work, do Gifts.create(name: param[:name])
    end
end

