const myFunction = require("./image_processing");
const Benchmark = require("benchmark");

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  var output = benchmarking(context);
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: output,
  };
};

function benchmarking(context) {
  let suite = new Benchmark.Suite();

  suite
    .add(`Processing the image`, function () {
      myFunction.image_processing();
    })
    .on("cycle", function (event) {
      context.log(String(event.target));
    })
    .on("complete", function () {
      context.log("Fastest is" + this.filter("fastest").map("name"));
    })
    .run({ async: false });

  return `Image processing completed successfully !`;
}
