import { relationship } from "./mock.api";
export const listRelationship = () => {
  return relationship;
};

export const listRelationshipFrom = (id) => {
  
  const relationshipFrom = relationship.filter((r) => r.from === id);
  return relationshipFrom;
};

export const listRelationshipTo = (id) => {
  const relationshipTo = relationship.filter((r) => r.to === id);
  return relationshipTo;
};
