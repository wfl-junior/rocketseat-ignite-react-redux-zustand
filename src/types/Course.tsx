import type { Module } from "./Module";

export interface Course {
  id: string;
  modules: Module[];
}
