class Creategiftees < ActiveRecord::Migration[6.1]
  def change
    create_table :giftees do |t|
      t.string :name
      t.string :address
      t.string :category1
      t.string :category2
      t.string :category3
      t.integer :price_low
      t.integer :price_high
    end
  end
end

