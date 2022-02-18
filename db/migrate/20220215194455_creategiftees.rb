class Creategiftees < ActiveRecord::Migration[6.1]
  def change
    create_table :giftees do |t|
      t.string :name
      t.string :city
      t.string :state
      t.string :category1
      t.string :category2
      t.string :category3
      t.string :price
    end
  end
end

