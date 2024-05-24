import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(vine.object({}))
export const updateUserValidator = vine.compile(vine.object({}))
