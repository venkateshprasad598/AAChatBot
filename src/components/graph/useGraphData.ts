import { useEffect, useRef, useState } from "react";
import { getMoreNodes } from "../../api";

const useForceGraph = (nodesAndRelationships: any) => {
    const fgRef = useRef<any>(null);
    const [graphData, setGraphData] = useState({ nodes: [], links: [] });
    const [intGraphData, setIntGraphData] = useState({ nodes: [], links: [] });
    const [selectedNode, setSelectedNode] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [hoveredNode, setHoveredNode] = useState(null);
    const [uniqueLabels, setUniqueLabels] = useState([]);
    const [selectedLabels, setSelectedLabels] = useState([]);
    const [isRefGiven, setRefGiven] = useState(false);
    const [colorObjs, setColorObjs] = useState({});
    const [colorCount, setColorCount] = useState(0);


    const handleModalClose = () => {
        setModalOpen(false);
    };

    const transformData = (apiResponse) => {
        const colors = [
            "#fa9d9d",
            "#f4fa9d",
            "#9dfad0",
            " #72fc7f",
            "#a7e7fa",
            "#b0b8f7",
            "#d7dbfa",
            "#ad8080",
            "#d391ed",
            "#feb0ff",
            "#fa4b4b",
        ];

        let colorIndex = colorCount;
        const uniqueLabels = [];
        const objType = {}

        const nodes = apiResponse.nodes.map((nodeData) => {
            const obj = nodeData
            const { label, properties } = nodeData;
            if (colorIndex === colors.length) colorIndex = 0;

            if (
                label?.[0] &&
                !objType[label?.[0]] &&
                !uniqueLabels?.includes(label?.[0])
            ) {
                objType[label[0]] = colors[colorIndex];
                colorIndex++;
                uniqueLabels.push(label[0]);
            }
            setColorCount(colorIndex);
            obj["name"] = label?.[0] || ""
            obj["properties"] = properties
            obj["parentColor"] = objType[label?.[0]] || "black",
                obj["childColor"] = ""
            obj["collapsed"] = false
            obj["label"] = label?.[0] || ""
            return obj
        });

        const links = apiResponse.relationships;
        return { nodes, links, uniqueLabels, objType };
    };

    const handleNodeClick = (node) => {
        console.log({ node });
        if (fgRef?.current && !isRefGiven) {
            fgRef?.current?.d3Force("link").distance(120); // Increase the link distance
            setRefGiven(true);
        }
        setModalOpen(true);
        setSelectedNode(node);
    };

    const handleCheckboxChange = (label) => {
        const prevLabels = selectedLabels;
        const selectedNewLabels = prevLabels.includes(label)
            ? prevLabels.filter((l) => l !== label)
            : [...prevLabels, label];

        const filteredGraphData = intGraphData.nodes.filter((node) =>
            selectedNewLabels.includes(node.label)
        );

        setSelectedLabels(selectedNewLabels);
        setGraphData({ ...graphData, nodes: filteredGraphData });
    };

    const handleShowMoreNodes = async (node) => {
        const label = node?.label || "";
        const id = node?.id || "";

        if (!label || !id) return;
        const params = {
            id: id, label: label
        }
        try {
            const response = await getMoreNodes(params)

            if (response?.status === 200) {
                const responseArr = response?.data;
                const searchedData = transformData(responseArr);
                const previousNodes = graphData?.nodes.map((data) => data?.id);
                const removeRepeatedNodes = searchedData?.nodes?.filter(
                    (data) => !previousNodes.includes(data?.id)
                );

                const newInitUniqueLabels = searchedData?.uniqueLabels || [];
                const intColorObjs = searchedData?.objType || {};
                const initUniqueLabels = newInitUniqueLabels.filter(
                    (data) => !uniqueLabels.includes(data)
                );

                const newGraphData = {
                    nodes: [...graphData.nodes, ...removeRepeatedNodes],
                    links: [...graphData.links, ...searchedData.links],
                };

                setGraphData(newGraphData);
                setIntGraphData(newGraphData);

                setSelectedLabels([...selectedLabels, ...initUniqueLabels]);
                setUniqueLabels([...uniqueLabels, ...initUniqueLabels]);
                setColorObjs({ ...colorObjs, ...intColorObjs });
            }
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    const getConnectedNodesAndLinks = (nodeId) => {
        const connectedNodes = new Set();
        const connectedLinks = new Set();

        graphData.links.forEach((link) => {
            if (link.source.id === nodeId || link.source === nodeId) {
                connectedNodes.add(link.target.id || link.target);
                connectedLinks.add(link);
            }
            if (link.target.id === nodeId || link.target === nodeId) {
                connectedNodes.add(link.source.id || link.source);
                connectedLinks.add(link);
            }
        });

        return { connectedNodes, connectedLinks };
    };

    const handleShowMore = () => {
        handleModalClose();
        handleShowMoreNodes(selectedNode);
    };

    const handleHoveredNode = (e) => setHoveredNode(e);

    useEffect(() => {
        const initialGraphData = { ...nodesAndRelationships }
        if (initialGraphData?.nodes && initialGraphData?.relationships) {
            const restructuredRes = transformData(initialGraphData);
            setGraphData(restructuredRes)
            setIntGraphData(restructuredRes);
        }
    }, [nodesAndRelationships]);

    useEffect(() => {
        if (fgRef?.current) {
            fgRef?.current?.d3Force("link").distance(120);
        }
    }, [graphData])

    return {
        fgRef,
        graphData,
        modalOpen,
        selectedNode,
        hoveredNode,
        uniqueLabels,
        selectedLabels,
        colorObjs,
        handleNodeClick,
        handleCheckboxChange,
        handleShowMoreNodes,
        handleHoveredNode,
        setModalOpen,
        getConnectedNodesAndLinks,
        handleModalClose,
        handleShowMore
    };
};

export default useForceGraph;
