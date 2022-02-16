class Gift < ActiveRecord::Base
    belongs_to :giftee
    belongs_to :user
end