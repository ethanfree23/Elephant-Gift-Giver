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

ActiveRecord::Schema.define(version: 2022_02_17_031555) do

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "category"
  end

  create_table "giftees", force: :cascade do |t|
    t.string "name"
    t.string "city"
    t.string "state"
    t.string "category1"
    t.string "category2"
    t.string "category3"
    t.string "price"
  end

  create_table "gifts", force: :cascade do |t|
    t.string "gift"
    t.string "category"
    t.integer "user_id"
    t.integer "giftee_id"
  end

  create_table "orders", force: :cascade do |t|
    t.string "giftee"
    t.string "gift"
    t.integer "user_id"
    t.integer "gift_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password"
    t.string "city"
    t.string "state"
  end

end
