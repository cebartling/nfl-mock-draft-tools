class CreateDraftProspects < ActiveRecord::Migration[6.0]

  def change
    create_table :draft_prospects, id: :uuid do |t|
      t.uuid :annual_draft_id, null: false
      t.string :given_name, null: false, limit: 30
      t.string :middle_name, null: true, limit: 30
      t.string :family_name, null: false, limit: 60
      t.date :birth_date, null: false
      t.timestamps
    end

    add_foreign_key :draft_prospects, :annual_drafts

    add_column :draft_prospects, :position, :football_position_enum, null: false, index: true
    add_column :draft_prospects, :college, :string, null: false, limit: 120, index: true
    add_column :draft_prospects, :college_year, :college_year_enum, null: false, index: true
  end

end
