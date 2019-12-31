module Mutations
  class CreateDraftProspect < BaseMutation
    #null true

    argument :annual_draft_id, ID, required: true
    argument :birth_date, GraphQL::Types::ISO8601Date, required: true
    argument :college, String, required: true
    argument :college_year, Types::CollegeYearType, required: true
    argument :family_name, String, required: true
    argument :given_name, String, required: true
    argument :middle_name, String, required: false
    argument :position, Types::FootballPositionType, required: true

    field :draft_prospect, Types::DraftProspectType, null: true
    field :errors, [String], null: false

    def resolve(params)
      annual_draft = AnnualDraft.find(params[:annual_draft_id])
      draft_prospect = annual_draft.draft_prospects.build(params)
      errors = []

      unless draft_prospect.save
        draft_prospect = nil
        errors = draft_prospect.errors.full_messages
      end

      {
        draft_prospect: draft_prospect,
        errors: errors
      }
    end

  end
end
