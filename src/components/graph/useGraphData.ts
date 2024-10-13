import axios from "axios";
import { useEffect, useRef, useState } from "react";

const useForceGraph = (nodesAndRelationships: any) => {
    const fgRef = useRef<any>();
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
        const objType = {};

        const nodes = apiResponse.nodes.map((nodeData) => {
            const { id, label, properties } = nodeData;
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
            return {
                id,
                name: properties?.id || "",
                properties: properties,
                parentColor: objType[label?.[0]] || "black",
                childColor: "",
                collapsed: false,
                label: label?.[0] || "",
            };
        });

        const links = apiResponse.relationships;
        return { nodes, links, uniqueLabels, objType };
    };

    const handleNodeClick = (node) => {
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
        try {
            const response = await axios.get(
                `https://www.tejailabs.in:8506/get-on-click?id=${id}&label=${label}`
            );

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
        if (nodesAndRelationships?.nodes && nodesAndRelationships?.relationships) {
            const restructuredRes = transformData(nodesAndRelationships);
            setGraphData(restructuredRes);
            setIntGraphData(restructuredRes);
        }

    }, [nodesAndRelationships]);

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
