export namespace AppHeader {
  interface Type {
    id: number;
    title: string;
  }

  interface Icon {
    type: string;
    description: string;
    copyright?: any;
    sizes: {
      full: string;
      thumb: string;
    };
  }

  export interface Link {
    title: string;
    url: string;
  }

  export interface Child {
    title: string;
    type: {
      id: number;
      title: string;
    };
    order: number;
    links: Link[];
  }

  interface Theme {
    alias: string;
    type: string;
    title: string;
    description: string;
    count: number;
    url: string;
    icon: Icon;
  }

  export interface Item {
    title: string;
    url: string;
    order: number;
    type: Type;
    items?: Theme[];
    children?: Child[];
    color: string;
  }

  export interface RandomPost {
    redirect_url: string;
  }

  export interface HeaderModalPayload {
    activeTab: number;
    modalIdentifier: string;
  }
}
