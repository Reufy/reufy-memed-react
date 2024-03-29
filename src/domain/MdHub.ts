import { Patient } from './Patient'
import { Module } from './Module'

export interface MdHub {
  server: {
    unbindEvents: () => void
  }
  command: {
    send: <T = Patient | unknown>(moduleName: string, action: string, payload?: T) => Promise<void>
    deletePatient: unknown | boolean
    removePatient: unknown | boolean
    editPatient: unknown | boolean
  }
  module: Module
  event: {
    add<T = unknown>(name: string, handler: (...args: T[]) => void): void
  }
}
