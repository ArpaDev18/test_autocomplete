import { gql } from "@apollo/client";

export const GET_POSITIONS_QUERY = gql`
  query companyPositions($page: Int) {
    applicantIndividualCompanyPositions(page: $page) {
      paginatorInfo {
        currentPage
        total
        lastPage
      }
      data {
        id
        name
      }
    }
  }
`;

export const ADD_COMPANY_POSITION_QUERY = gql`
  mutation addCompanyPosition($name: String!, $company_id: ID!) {
    createApplicantIndividualCompanyPosition(
      name: $name
      company_id: $company_id
    ) {
      id
      name
    }
  }
`;
