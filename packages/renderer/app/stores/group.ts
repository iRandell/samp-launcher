/* eslint-disable import/named */
import { IObservableArray, observable, action } from 'mobx'

import { Group, Server } from '@shared/types/entities'

export class GroupStore {
  readonly groups = observable<Group>([])
  @observable selectedGroup: Group | undefined
  @observable subjectGroup: Group | undefined // The group that under renaming or deleting

  @observable createGroupDialogShown = false
  @observable deleteGroupConfirmDialogShown = false
  @observable manageGroupDialogShown = false
  @observable renameGroupDialogShown = false

  @action setGroups = (groups: Group[]): void => {
    this.groups.replace(groups)
  }

  @action setSelectedGroup = (group?: Group): void => {
    this.selectedGroup = group
  }

  @action setSubjectGroup = (group?: Group): void => {
    this.subjectGroup = group
  }

  @action setCreateGroupDialogShown = (shown: boolean): void => {
    this.createGroupDialogShown = shown
  }

  @action setDeleteGroupConfirmDialogShown = (shown: boolean): void => {
    this.deleteGroupConfirmDialogShown = shown
  }

  @action setManageGroupDialogShown = (shown: boolean): void => {
    this.manageGroupDialogShown = shown
  }

  @action setRenameGroupDialogShown = (shown: boolean): void => {
    this.renameGroupDialogShown = shown
  }

  @action addGroup = (group: Group): void => {
    this.groups.push(group)

    this.setSelectedGroup(ExArray.getLast(this.groups))
  }

  @action deleteGroup = (targetGroup: Group): void => {
    this.groups.remove(targetGroup)

    if (this.isSelectedGroup(targetGroup)) {
      this.setSelectedGroup(this.groups[0])
    }
  }

  @action renameGroup = (targetGroup: Group, name: string): void => {
    targetGroup.name = name
  }

  @action setGroupServers = (servers: Server[], targetGroup = this.getSelectedGroup()): void => {
    ;(targetGroup!.servers as IObservableArray).replace(servers)
  }

  getGroups = (): Group[] => {
    return this.groups
  }

  getSelectedGroup = (): Group | undefined => {
    return this.selectedGroup
  }

  getSubjectGroup = (): Group | undefined => {
    return this.subjectGroup
  }

  findGroupById = (targetId: number): Group | undefined => {
    return this.groups.find(({ id }) => id === targetId)
  }

  findGroupByIdOrDefault = (targetId?: number): Group | undefined => {
    return targetId ? this.findGroupById(targetId) || this.groups[0] : this.groups[0]
  }

  isSelectedGroup = (group: Group): boolean => {
    return this.selectedGroup === group
  }

  isGroupNameAvailable = (groupName: string): boolean => {
    return !this.groups.some(({ name }) => name === groupName)
  }
}

export const groupStore = new GroupStore()

export const {
  setGroups,
  setSelectedGroup,
  addGroup,
  deleteGroup,
  renameGroup,
  getGroups,
  getSelectedGroup,
  getSubjectGroup,
  findGroupById,
  findGroupByIdOrDefault,
  isSelectedGroup,
  isGroupNameAvailable
} = groupStore
