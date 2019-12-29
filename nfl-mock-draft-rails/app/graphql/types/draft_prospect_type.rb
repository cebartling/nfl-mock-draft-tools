module Types
  class DraftProspectType < Types::BaseObject
    field :id, ID, null: false
    field :annual_draft, Types::AnnualDraftType, null: false
    field :birth_date, GraphQL::Types::ISO8601Date, null: false
    field :college, String, null: false
    field :college_year, Types::CollegeYearType, null: false
    field :family_name, String, null: false
    field :given_name, String, null: false
    field :middle_name, String, null: false
    field :position, Types::FootballPositionType, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
