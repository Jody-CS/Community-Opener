ConnectApi.CommunityPage comm = ConnectApi.Communities.getCommunities();
System.debug(JSON.serialize(comm.communities[0].siteUrl));