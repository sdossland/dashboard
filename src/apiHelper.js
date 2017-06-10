/**
 * Created by sophia on 6/10/17.
 */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

function getData(response) {
  return response.data;
}

export function getAllCompanies() {
  return api.get('/companies').then(getData);
}

export function getPeopleOfCompany(companyId) {
  return api.get(`/companies/${companyId}/people`).then(getData);
}

export function addCompany(company) {
  return api.post('/companies', company).then(getData);
}

export function editCompany(companyId, company) {
  return api.put(`/companies/${companyId}`, company).then(getData);
}

export function getCompany(companyId) {
  return api.get(`/companies/${companyId}`).then(getData);
}

export function addPerson(person) {
  return api.post('/person', person).then(getData);
}

export function editPerson(personId, person) {
  return api.put(`/person/${personId}`, person).then(getData);
}

export function deletePerson(personId) {
  return api.delete(`/person/${personId}`).then(getData);
}

export function getPerson(personId) {
  return api.get(`/person/${personId}`).then(getData);
}
