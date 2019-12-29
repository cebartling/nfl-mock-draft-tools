module Types
  class QueryType < Types::BaseObject
    field :test_field, String, null: false, description: "An example field added by the generator"
    field :teams, [Types::TeamType], null: false, description: 'NFL teams.'
    field :drafts, [Types::AnnualDraftType], null: false, description: 'NFL annual draft.'
    field :draft_prospects, [Types::DraftProspectType], null: false, description: 'Draft prospects for an annual draft.'do
      argument :annual_draft_id, ID, required: true
    end

    def test_field
      "Hello World!"
    end

    def teams
      Team.all
    end

    def drafts
      AnnualDraft.all
    end

    def draft_prospects(params)
      DraftProspect.all_by_annual_draft(params)
    end
  end
end
