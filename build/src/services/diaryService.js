"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const diaries_1 = __importDefault(require("../../data/diaries"));
const diaries = diaries_1.default;
const getEntries = () => {
    return diaries;
};
const getNonSensitiveEntries = () => {
    return diaries.map(({ id, date, weather, visibility }) => ({
        id,
        date,
        weather,
        visibility,
    }));
};
const findById = (id) => {
    const entry = diaries.find(d => d.id === id);
    return entry;
};
const addDiary = (entry) => {
    const newDiaryEntry = Object.assign({ id: Math.max(...diaries.map(d => d.id)) + 1 }, entry);
    diaries.push(newDiaryEntry);
    return newDiaryEntry;
};
const addEntry = () => {
    return null;
};
exports.default = {
    getEntries,
    addEntry,
    getNonSensitiveEntries,
    findById,
    addDiary
};
