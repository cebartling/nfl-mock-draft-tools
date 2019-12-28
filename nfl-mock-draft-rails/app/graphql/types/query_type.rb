module Types
  class QueryType < Types::BaseObject
    field :test_field, String, null: false, description: "An example field added by the generator"
    field :teams, [Types::TeamType], null: false, description: 'NFL teams.'
    field :drafts, [Types::AnnualDraftType], null: false, description: 'NFL annual draft.'

    def test_field
      "Hello World!"
    end

    def teams
      Team.all
    end

    def drafts
      AnnualDraft.all
    end

  end
end
