# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_02_15_195316) do

  create_table "companies", force: :cascade do |t|
    t.string "company_name"
    t.string "address"
    t.string "category1_name"
    t.string "category2_name"
    t.string "category3_name"
  end

  create_table "giftees", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "category1"
    t.string "category2"
    t.string "category3"
    t.integer "price_low"
    t.integer "price_high"
  end

  create_table "gifts", force: :cascade do |t|
    t.string "item_name"
    t.string "category"
    t.integer "giftee_id"
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "address"
  end

end
