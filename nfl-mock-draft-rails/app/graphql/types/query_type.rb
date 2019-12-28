module Types
  class QueryType < Types::BaseObject
    field :test_field, String, null: false, description: "An example field added by the generator"
    field :all_teams, [Types::TeamType], null: false, description: 'NFL teams.'

    def test_field
      "Hello World!"
    end

    def all_teams
      Team.all
    end

  end
end
