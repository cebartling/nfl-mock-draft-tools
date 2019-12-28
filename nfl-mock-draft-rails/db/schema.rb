# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_28_220302) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "pgcrypto"
  enable_extension "plpgsql"

  create_table "annual_drafts", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.integer "year", null: false
    t.date "draft_date", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["year"], name: "index_annual_drafts_on_year", unique: true
  end

# Could not dump table "draft_prospects" because of following StandardError
#   Unknown type 'football_position_enum' for column 'position'

  create_table "teams", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name", limit: 60, null: false
    t.string "slug", limit: 60, null: false
    t.string "svg_logo_url", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_teams_on_name", unique: true
    t.index ["slug"], name: "index_teams_on_slug", unique: true
  end

  add_foreign_key "draft_prospects", "annual_drafts"
end
