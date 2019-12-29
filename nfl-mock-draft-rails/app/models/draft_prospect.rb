# == Schema Information
#
# Table name: draft_prospects
#
#  id              :uuid             not null, primary key
#  birth_date      :date             not null
#  college         :string(120)      not null
#  college_year    :enum             not null
#  family_name     :string(60)       not null
#  given_name      :string(30)       not null
#  middle_name     :string(30)
#  position        :enum             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  annual_draft_id :uuid             not null
#
# Foreign Keys
#
#  fk_rails_...  (annual_draft_id => annual_drafts.id)
#

class DraftProspect < ApplicationRecord
  belongs_to :annual_draft

  scope :search, -> (params) do
    prospects = all
    prospects = prospects.where(given_name: params[:given_name]) if params[:given_name]
    prospects = prospects.where(family_name: params[:family_name]) if params[:family_name]
    prospects = prospects.where(middle_name: params[:middle_name]) if params[:middle_name]
    prospects = prospects.where(college: params[:college]) if params[:college]
    #prospects = prospects.paginate(page: params[:page]) if params[:page]
    prospects
  end
end
