//Dont change it
requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $) {
        function parkBenchesVisualization(tgt_node, data) {

            if (! data || ! data.ext) {
                return
            }

            const input = data.in[0]
            const explanation = data.ext.explanation
            const answer = data.ext.answer

            /*----------------------------------------------*
             *
             * attr
             *
             *----------------------------------------------*/
            const attr = {
                bench: {
                    remove: {
                        sheet: {
                            'fill': '#82D1F5',
                            'stroke': '#82D1F5',
                        },
                    },
                    exist: {
                        sheet: {
                            'fill': 'black',
                            'stroke-width': '0.1px',
                            'stroke': 'black',
                        },
                        leg: {
                            'stroke-width': '0.1px',
                            'stroke': 'black',
                        },
                    },
                },
            }

            /*----------------------------------------------*
             *
             * value
             *
             *----------------------------------------------*/
            let x_max = 0
            input.forEach(([c, w])=>{
                x_max = Math.max(x_max, c+w)
            })
            const unit = 300/ x_max

            /*----------------------------------------------*
             *
             * paper
             *
             *----------------------------------------------*/
            const max_width = 340
            const os = 20
            const height = unit
            const paper = Raphael(tgt_node, max_width, height+os*2)
            const leg = {'stroke-width': (Math.min(0.7, 0.1*unit))+'px'}

            /*----------------------------------------------*
             *
             * line
             *
             *----------------------------------------------*/
            // number line
            paper.path([
                'M',
                os-5,
                os+height,
                'h',
                max_width - os*2 + 10,
            ]).attr(attr.bench.exist.leg).attr(leg)

            // scale
            const sc = x_max >= 50 ? 10 : 5
            const last_sc = x_max - (x_max % sc)
            const mid_sc = last_sc / 2
            const x_ary = [0, mid_sc, last_sc]

            x_ary.forEach(x=>{
                paper.path([
                    'M',
                    os+(x * unit),
                    os+height,
                    'v',
                    3,
                ]).attr(attr.bench.exist.leg).attr(leg)
                paper.text(os+(x * unit), os+height+8, x)
            })

            // benches
            let objs = []
            draw_benches(input)

            // benches animation
            explanation.forEach(i=>{
                objs[i].animate(attr.bench.remove.sheet, 1000);
            })

            /*----------------------------------------------*
             *
             * draw benches
             *
             *----------------------------------------------*/
            function draw_benches(benches) {
                benches.forEach(([x, len])=>{
                    let obj = paper.set()
                    obj.push(paper.path(['M', os+(x)*unit, os+height*0.5, 'v', 0.5*unit, ]).attr(attr.bench.exist.leg).attr(leg))
                    obj.push(paper.path(['M', os+(x+len)*unit, os+height*0.5, 'v', 0.5*unit, ]).attr(attr.bench.exist.leg).attr(leg))
                    obj.push(paper.rect(os+(x)*unit, os, len*unit, 0.5*unit).attr(attr.bench.exist.sheet).attr(leg))
                    objs.push(obj)
                })
            }
        }

        var $tryit;

        var io = new extIO({
            multipleArguments: false,
            functions: {
                python: 'park_benches',
                js: 'parkBenches'
            },
            animation: function($expl, data){
                parkBenchesVisualization(
                    $expl[0],
                    data,
                );
            }
        });
        io.start();
    }
);
