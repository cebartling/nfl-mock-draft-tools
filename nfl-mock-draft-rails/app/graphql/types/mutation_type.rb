module Types
  class MutationType < Types::BaseObject

    field :create_draft_prospect, mutation: Mutations::CreateDraftProspect

  end
end
