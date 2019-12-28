# == Schema Information
#
# Table name: teams
#
#  id           :uuid             not null, primary key
#  name         :string(60)       not null
#  slug         :string(60)       not null
#  svg_logo_url :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# Indexes
#
#  index_teams_on_name  (name) UNIQUE
#  index_teams_on_slug  (slug) UNIQUE
#

FactoryBot.define do
  factory :team do
    
  end
end
