import { EntityDataModuleConfig, EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  BookMark: {},
  Signup: {},
  Comment: {},
  Book: {},
};
export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
};
