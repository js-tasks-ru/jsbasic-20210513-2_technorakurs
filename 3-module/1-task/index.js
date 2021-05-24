function namify(users) {
  return !Array.isArray(users)
    ? (users = [])
    : users.map((item) => {
        return item.name;
      });
    }