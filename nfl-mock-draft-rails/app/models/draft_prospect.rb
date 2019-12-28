# == Schema Information
#
# Table name: draft_prospects
#
#  id           :uuid             not null, primary key
#  birth_date   :date             not null
#  college      :string(120)      not null
#  college_year :enum             not null
#  family_name  :string(60)       not null
#  given_name   :string(30)       not null
#  middle_name  :string(30)
#  position     :enum             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class DraftProspect < ApplicationRecord
end
