class CreateAnnualDrafts < ActiveRecord::Migration[6.0]
  def change
    create_table :annual_drafts, id: :uuid do |t|
      t.integer :year, null: false
      t.date :draft_date, null: false
      t.timestamps
    end

    add_index :annual_drafts, :year, unique: true
  end
end
