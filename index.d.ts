declare module "is-eu-member" {
  export function getEuMembers(): string[];
  export function isEuMember(countryCode: string): boolean;
}
