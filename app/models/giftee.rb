class Giftee < ActiveRecord::Base
    has_many :gifts
    has_many :users, through: :gifts

end 