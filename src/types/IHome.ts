interface IHomePart {
  value: string | null;
  count: string;
}

interface IHomeAges {
  range1822: number;
  range2225: number;
  range2530: number;
  range3040: number;
  range4050: number;
  range5065: number;
  range65: number;
}

export interface IHome {
  ages: IHomeAges;
  religions: IHomePart[];
  genders: IHomePart[];
  hobbies: IHomePart[];
  status: IHomePart[];
  cities: IHomePart[];
  count: number;
}
