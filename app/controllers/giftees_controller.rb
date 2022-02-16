class GifteesController < ApplicationController
    set :default_content_type, 'application/json'

    get "/giftees" do 
        # fetch("http://localhost9292/giftees")
        giftees = Giftee.all
        giftees.to_json
    end

    post "/giftees" do
        new_giftee = Giftee.create(params)
        # if this does not work, do Giftee.create(name: param[:name])
    end
end
