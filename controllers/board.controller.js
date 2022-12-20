const items = [
  {
    subject: "첫번째 게시물",
    content: "content",
    name: "name...",
  },
];

exports.index = (req, res) => {
  res.render("board/index.html");
};

exports.list = (req, res) => {
  res.render("board/list.html", { items });
};

exports.getWrite = (req, res) => {
  res.render("board/write.html");
};

exports.postWrite = (req, res) => {
  const { content, subject, name } = req.body;
  items.push({ content, subject, name });
  res.redirect(`view?index=${items.length - 1}`);
};

exports.view = (req, res) => {
  const { index } = req.query;
  const item = {
    ...items[index],
    index,
  };
  res.render("board/view.html", { item });
};

exports.getModify = (req, res) => {
  const { index } = req.query;
  const item = {
    ...items[index],
    index,
  };

  res.render("board/modify.html", { item });
};

exports.postModify = (req, res) => {
  const { index, subject, content, name } = req.body;
  items[index].subject = subject;
  items[index].content = content;
  items[index].name = name;

  // 바로 위의 코드들을 간략히 표현한 코드(rest 활용)
  // const { index, ...rest } = req.body;
  // items[index] = rest;

  res.redirect(`view?index=${index}`);
};

exports.delete = (req, res) => {
  const { index } = req.query;
  items.splice(index, 1);
  res.redirect("list");
};
