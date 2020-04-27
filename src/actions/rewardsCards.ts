import { RewardsCard } from "../common/interfaces";

export const fetchRewardsCards = async (): Promise<RewardsCard[]> => {
  // TODO
  return Promise.resolve([
    {
      id: "1",
      promoId: "1",
      promoTitle: "Buy 10 cups, get 1 free!",
      userId: "123",
      companyId: "1",
      companyName: "Sip & Dip",
      companyLogo:
        "https://scontent.fsyd6-1.fna.fbcdn.net/v/t31.0-8/13062914_461113580751428_933251125108965451_o.png?_nc_cat=100&_nc_sid=85a577&_nc_ohc=k-gycubFeq0AX_qiORM&_nc_ht=scontent.fsyd6-1.fna&oh=8a36101e3aa58c054da140b78dad5cb8&oe=5ECB87E1",
      acquiredCount: 1,
      companyLocation: "Solenad, Nuvali",
      totalCount: 10,
      backgroundColor: "#000000",
      textColor: "#FFFFFF",
    },
    {
      id: "2",
      promoId: "2",
      promoTitle: "Buy 5 shorts, get 1 free",
      userId: "123",
      companyId: "2",
      companyName: "Uniqlo",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/1200px-UNIQLO_logo.svg.png",
      acquiredCount: 0,
      companyLocation: "Solenad, Nuvali",
      totalCount: 5,
      backgroundColor: "#81042B",
      textColor: "#FFFFFF",
    },
    {
      id: "4",
      promoId: "4",
      promoTitle: "Buy 10 cups, get 1 free",
      userId: "123",
      companyId: "5",
      companyName: "Serenitea",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/1200px-UNIQLO_logo.svg.png",
      acquiredCount: 0,
      companyLocation: "Solenad, Nuvali",
      totalCount: 6,
      backgroundColor: "#007C3D",
      textColor: "#FFFFFF",
    },
  ]);
};
