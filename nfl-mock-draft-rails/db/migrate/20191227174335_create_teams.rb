class CreateTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :teams, id: :uuid do |t|
      t.string :name, null: false, limit: 60
      t.string :slug, null: false, limit: 60
      t.string :svg_logo_url, null: false

      t.timestamps
    end

    add_index :teams, :slug, unique: true
    add_index :teams, :name, unique: true
  end
end
