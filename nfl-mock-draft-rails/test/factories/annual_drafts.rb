# == Schema Information
#
# Table name: annual_drafts
#
#  id         :uuid             not null, primary key
#  draft_date :date             not null
#  year       :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_annual_drafts_on_year  (year) UNIQUE
#

FactoryBot.define do
  factory :annual_draft do
    
  end
end
